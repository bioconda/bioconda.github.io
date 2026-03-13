:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'modeltest-ng'
.. highlight: bash

modeltest-ng
============

.. conda:recipe:: modeltest-ng
   :replaces_section_title:
   :noindex:

   ModelTest\-NG is a tool for selecting the best\-fit model of evolution for DNA and protein alignments.

   :homepage: https://github.com/ddarriba/modeltest
   :documentation: https://github.com/ddarriba/modeltest/wiki
   
   :license: GPL / GPL-3.0
   :recipe: /`modeltest-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modeltest-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modeltest-ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msz189`, doi: :doi:`10.1093/sysbio/syu084`

   


.. conda:package:: modeltest-ng

   |downloads_modeltest-ng| |docker_modeltest-ng|

   :versions:
      
      

      ``0.1.7-3``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openmpi: ``>=4.1.6,<5.0a0``

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

    pixi global install modeltest-ng

to add into an existing workspace instead, run::

    pixi add modeltest-ng

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install modeltest-ng

Alternatively, to install into a new environment, run::

    conda create -n envname modeltest-ng

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/modeltest-ng:<tag>

(see `modeltest-ng/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_modeltest-ng| image:: https://img.shields.io/conda/dn/bioconda/modeltest-ng.svg?style=flat
   :target: https://anaconda.org/bioconda/modeltest-ng
   :alt:   (downloads)
.. |docker_modeltest-ng| image:: https://quay.io/repository/biocontainers/modeltest-ng/status
   :target: https://quay.io/repository/biocontainers/modeltest-ng
.. _`modeltest-ng/tags`: https://quay.io/repository/biocontainers/modeltest-ng?tab=tags


.. raw:: html

    <script>
        var package = "modeltest-ng";
        var versions = ["0.1.7","0.1.7","0.1.7","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/modeltest-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/modeltest-ng/README.html