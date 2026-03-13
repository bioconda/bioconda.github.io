:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioexcel_seqqc'
.. highlight: bash

bioexcel_seqqc
==============

.. conda:recipe:: bioexcel_seqqc
   :replaces_section_title:
   :noindex:

   Sequence Quality Control pipeline\/modules

   :homepage: https://github.com/bioexcel/bioexcel_seqqc
   :license: APACHE / Apache Software License
   :recipe: /`bioexcel_seqqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioexcel_seqqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioexcel_seqqc/meta.yaml>`_

   


.. conda:package:: bioexcel_seqqc

   |downloads_bioexcel_seqqc| |docker_bioexcel_seqqc|

   :versions:
      
      

      ``0.6-0``,  ``0.5-0``

      

   
   :depends on cutadapt: 
   :depends on fastqc: 
   :depends on python: ``>=3``
   :depends on pyyaml: 

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

    pixi global install bioexcel_seqqc

to add into an existing workspace instead, run::

    pixi add bioexcel_seqqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioexcel_seqqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioexcel_seqqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioexcel_seqqc:<tag>

(see `bioexcel_seqqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioexcel_seqqc| image:: https://img.shields.io/conda/dn/bioconda/bioexcel_seqqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioexcel_seqqc
   :alt:   (downloads)
.. |docker_bioexcel_seqqc| image:: https://quay.io/repository/biocontainers/bioexcel_seqqc/status
   :target: https://quay.io/repository/biocontainers/bioexcel_seqqc
.. _`bioexcel_seqqc/tags`: https://quay.io/repository/biocontainers/bioexcel_seqqc?tab=tags


.. raw:: html

    <script>
        var package = "bioexcel_seqqc";
        var versions = ["0.6","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioexcel_seqqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioexcel_seqqc/README.html