:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spec2vec'
.. highlight: bash

spec2vec
========

.. conda:recipe:: spec2vec
   :replaces_section_title:
   :noindex:

   Word2Vec based similarity measure of mass spectrometry data.

   :homepage: https://github.com/iomega/spec2vec
   :documentation: https://spec2vec.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`spec2vec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spec2vec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spec2vec/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1008724`

   


.. conda:package:: spec2vec

   |downloads_spec2vec| |docker_spec2vec|

   :versions:
      
      

      ``0.8.0-1``,  ``0.8.0-0``,  ``0.6.0-0``

      

   
   :depends fuzzytm: 
   :depends gensim: ``>=4.2.0``
   :depends matchms: ``>=0.14.0,<=0.26.4``
   :depends numba: ``>=0.51``
   :depends numpy: 
   :depends python: ``>=3.7``
   :depends scipy: ``<=1.10.1``
   :depends tqdm: 
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

      mamba install spec2vec

   and update with::

      mamba update spec2vec

  To create a new environment, run::

      mamba create --name myenvname spec2vec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spec2vec:<tag>

   (see `spec2vec/tags`_ for valid values for ``<tag>``)


.. |downloads_spec2vec| image:: https://img.shields.io/conda/dn/bioconda/spec2vec.svg?style=flat
   :target: https://anaconda.org/bioconda/spec2vec
   :alt:   (downloads)
.. |docker_spec2vec| image:: https://quay.io/repository/biocontainers/spec2vec/status
   :target: https://quay.io/repository/biocontainers/spec2vec
.. _`spec2vec/tags`: https://quay.io/repository/biocontainers/spec2vec?tab=tags


.. raw:: html

    <script>
        var package = "spec2vec";
        var versions = ["0.8.0","0.8.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spec2vec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spec2vec/README.html