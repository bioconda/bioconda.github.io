:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moca'
.. highlight: bash

moca
====

.. conda:recipe:: moca
   :replaces_section_title:
   :noindex:

   Tool for motif conservation analysis

   :homepage: https://github.com/saketkc/moca
   :license: Public-Domain / ISC License (ISCL)
   :recipe: /`moca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moca/meta.yaml>`_

   


.. conda:package:: moca

   |downloads_moca| |docker_moca|

   :versions:
      
      

      ``0.4.3-1``,  ``0.4.3-0``,  ``0.3.4-2``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.2.9-0``

      

   
   :depends on biopython: ``>=1.68``
   :depends on certifi: ``>=2016.2.28``
   :depends on cffi: ``>=1.9.1``
   :depends on click: ``>=6.6``
   :depends on click-help-colors: ``>=0.3``
   :depends on coverage: ``>=4.2``
   :depends on cryptography: ``>=1.7.1``
   :depends on cycler: ``>=0.10.0``
   :depends on enum34: ``>=1.1.6``
   :depends on functools32: ``>=3.2.3.post2``
   :depends on future: ``>=0.16.0``
   :depends on idna: ``>=2.2``
   :depends on ipaddress: ``>=1.0.18``
   :depends on matplotlib: ``>=2.0.0``
   :depends on mmtf-python: ``>=1.0.5``
   :depends on msgpack-python: ``>=0.4.8``
   :depends on numpy: ``>=1.11.3``
   :depends on olefile: ``>=0.44``
   :depends on pandas: ``>=0.19.2``
   :depends on patsy: ``>=0.4.1``
   :depends on pillow: ``>=4.0.0``
   :depends on py: ``>=1.4.32``
   :depends on pyasn1: ``>=0.1.9``
   :depends on pybedtools: ``>=0.7.9``
   :depends on pybigwig: ``>=0.2.8``
   :depends on pycairo: ``>=1.10.0``
   :depends on pycparser: ``>=2.17``
   :depends on pyparsing: ``>=2.1.4``
   :depends on pysam: ``>=0.9.1.4``
   :depends on pytest: ``>=3.0.5``
   :depends on pytest-cov: ``>=2.4.0``
   :depends on pytest-mpl: ``>=0.5``
   :depends on python: ``<3``
   :depends on python-dateutil: ``>=2.3``
   :depends on pytz: ``>=2016.10``
   :depends on pyyaml: ``>=3.12``
   :depends on reportlab: ``>=3.3.0``
   :depends on scipy: ``>=0.18.1``
   :depends on seaborn: ``>=0.7.1``
   :depends on six: ``>=1.10.0``
   :depends on statsmodels: ``>=0.6.1``
   :depends on subprocess32: ``>=3.2.7``
   :depends on tqdm: ``>=4.7.2``

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

    pixi global install moca

to add into an existing workspace instead, run::

    pixi add moca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install moca

Alternatively, to install into a new environment, run::

    conda create -n envname moca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/moca:<tag>

(see `moca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_moca| image:: https://img.shields.io/conda/dn/bioconda/moca.svg?style=flat
   :target: https://anaconda.org/bioconda/moca
   :alt:   (downloads)
.. |docker_moca| image:: https://quay.io/repository/biocontainers/moca/status
   :target: https://quay.io/repository/biocontainers/moca
.. _`moca/tags`: https://quay.io/repository/biocontainers/moca?tab=tags


.. raw:: html

    <script>
        var package = "moca";
        var versions = ["0.4.3","0.4.3","0.3.4","0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moca/README.html