:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dajin2'
.. highlight: bash

dajin2
======

.. conda:recipe:: dajin2
   :replaces_section_title:
   :noindex:

   One\-step genotyping tools for targeted long\-read sequencing

   :homepage: https://github.com/akikuno/DAJIN2
   :license: MIT
   :recipe: /`dajin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dajin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dajin2/meta.yaml>`_

   


.. conda:package:: dajin2

   |downloads_dajin2| |docker_dajin2|

   :versions:
      
      

      ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``

      

   
   :depends cstag: ``>=0.4.1``
   :depends flask: ``>=2.2.0``
   :depends jinja2: ``>=3.1.0``
   :depends mappy: ``>=2.24``
   :depends midsv: ``>=0.10.1``
   :depends numpy: ``>=1.20.0``
   :depends openpyxl: ``>=3.0.0``
   :depends pandas: ``>=1.0.0``
   :depends plotly: ``>=5.0.0``
   :depends pysam: ``>=0.19.0``
   :depends python: 
   :depends python-kaleido: ``>=0.2.0``
   :depends rapidfuzz: ``>=3.0.0``
   :depends scikit-learn: ``>=1.0.0``
   :depends scipy: ``>=1.6.0``
   :depends statsmodels: ``>=0.13.5``
   :depends waitress: ``>=2.1.0``
   :depends wslpath: ``>=0.3.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dajin2

   and update with::

      mamba update dajin2

  To create a new environment, run::

      mamba create --name myenvname dajin2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dajin2:<tag>

   (see `dajin2/tags`_ for valid values for ``<tag>``)


.. |downloads_dajin2| image:: https://img.shields.io/conda/dn/bioconda/dajin2.svg?style=flat
   :target: https://anaconda.org/bioconda/dajin2
   :alt:   (downloads)
.. |docker_dajin2| image:: https://quay.io/repository/biocontainers/dajin2/status
   :target: https://quay.io/repository/biocontainers/dajin2
.. _`dajin2/tags`: https://quay.io/repository/biocontainers/dajin2?tab=tags


.. raw:: html

    <script>
        var package = "dajin2";
        var versions = ["0.3.3","0.3.3","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dajin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dajin2/README.html