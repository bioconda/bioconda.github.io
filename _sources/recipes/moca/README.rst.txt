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

      

   
   :depends biopython: ``>=1.68``
   :depends certifi: ``>=2016.2.28``
   :depends cffi: ``>=1.9.1``
   :depends click: ``>=6.6``
   :depends click-help-colors: ``>=0.3``
   :depends coverage: ``>=4.2``
   :depends cryptography: ``>=1.7.1``
   :depends cycler: ``>=0.10.0``
   :depends enum34: ``>=1.1.6``
   :depends functools32: ``>=3.2.3.post2``
   :depends future: ``>=0.16.0``
   :depends idna: ``>=2.2``
   :depends ipaddress: ``>=1.0.18``
   :depends matplotlib: ``>=2.0.0``
   :depends mmtf-python: ``>=1.0.5``
   :depends msgpack-python: ``>=0.4.8``
   :depends numpy: ``>=1.11.3``
   :depends olefile: ``>=0.44``
   :depends pandas: ``>=0.19.2``
   :depends patsy: ``>=0.4.1``
   :depends pillow: ``>=4.0.0``
   :depends py: ``>=1.4.32``
   :depends pyasn1: ``>=0.1.9``
   :depends pybedtools: ``>=0.7.9``
   :depends pybigwig: ``>=0.2.8``
   :depends pycairo: ``>=1.10.0``
   :depends pycparser: ``>=2.17``
   :depends pyparsing: ``>=2.1.4``
   :depends pysam: ``>=0.9.1.4``
   :depends pytest: ``>=3.0.5``
   :depends pytest-cov: ``>=2.4.0``
   :depends pytest-mpl: ``>=0.5``
   :depends python: ``<3``
   :depends python-dateutil: ``>=2.3``
   :depends pytz: ``>=2016.10``
   :depends pyyaml: ``>=3.12``
   :depends reportlab: ``>=3.3.0``
   :depends scipy: ``>=0.18.1``
   :depends seaborn: ``>=0.7.1``
   :depends six: ``>=1.10.0``
   :depends statsmodels: ``>=0.6.1``
   :depends subprocess32: ``>=3.2.7``
   :depends tqdm: ``>=4.7.2``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install moca

   and update with::

      mamba update moca

  To create a new environment, run::

      mamba create --name myenvname moca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/moca:<tag>

   (see `moca/tags`_ for valid values for ``<tag>``)


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