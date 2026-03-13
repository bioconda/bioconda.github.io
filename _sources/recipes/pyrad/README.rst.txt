:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrad'
.. highlight: bash

pyrad
=====

.. conda:recipe:: pyrad
   :replaces_section_title:
   :noindex:

   Assembly and analysis of RADseq data sets

   :homepage: https://github.com/dereneaton/pyrad
   :license: GPLv3
   :recipe: /`pyrad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrad/meta.yaml>`_

   


.. conda:package:: pyrad

   |downloads_pyrad| |docker_pyrad|

   :versions:
      
      

      ``3.0.66-3``,  ``3.0.66-2``,  ``3.0.66-0``,  ``3.0.64-0``

      

   
   :depends on muscle: 
   :depends on numpy: 
   :depends on python: ``<3``
   :depends on scipy: 
   :depends on vsearch: 

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

    pixi global install pyrad

to add into an existing workspace instead, run::

    pixi add pyrad

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyrad

Alternatively, to install into a new environment, run::

    conda create -n envname pyrad

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyrad:<tag>

(see `pyrad/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyrad| image:: https://img.shields.io/conda/dn/bioconda/pyrad.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrad
   :alt:   (downloads)
.. |docker_pyrad| image:: https://quay.io/repository/biocontainers/pyrad/status
   :target: https://quay.io/repository/biocontainers/pyrad
.. _`pyrad/tags`: https://quay.io/repository/biocontainers/pyrad?tab=tags


.. raw:: html

    <script>
        var package = "pyrad";
        var versions = ["3.0.66","3.0.66","3.0.66","3.0.64"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrad/README.html