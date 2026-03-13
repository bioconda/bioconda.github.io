:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'theta2'
.. highlight: bash

theta2
======

.. conda:recipe:: theta2
   :replaces_section_title:
   :noindex:

   Estimate tumor purity and clonal\/subclonal copy number aberrations directly from high\-throughput DNA sequencing data

   :homepage: https://github.com/raphael-group/THetA
   :license: Modified MIT (no inclusion in commercial tools)
   :recipe: /`theta2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theta2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theta2/meta.yaml>`_

   


.. conda:package:: theta2

   |downloads_theta2| |docker_theta2|

   :versions:
      
      

      ``0.7-3``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``

      

   
   :depends on joblib: 
   :depends on matplotlib: 
   :depends on numexpr: 
   :depends on numpy: 
   :depends on python: ``<3``
   :depends on scipy: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install theta2

to add into an existing workspace instead, run::

    pixi add theta2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install theta2

Alternatively, to install into a new environment, run::

    conda create -n envname theta2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/theta2:<tag>

(see `theta2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_theta2| image:: https://img.shields.io/conda/dn/bioconda/theta2.svg?style=flat
   :target: https://anaconda.org/bioconda/theta2
   :alt:   (downloads)
.. |docker_theta2| image:: https://quay.io/repository/biocontainers/theta2/status
   :target: https://quay.io/repository/biocontainers/theta2
.. _`theta2/tags`: https://quay.io/repository/biocontainers/theta2?tab=tags


.. raw:: html

    <script>
        var package = "theta2";
        var versions = ["0.7","0.7","0.7","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/theta2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/theta2/README.html