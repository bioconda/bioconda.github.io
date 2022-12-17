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
   :license: Apache-2.0
   :recipe: /`spec2vec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spec2vec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spec2vec/meta.yaml>`_

   


.. conda:package:: spec2vec

   |downloads_spec2vec| |docker_spec2vec|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends gensim: ``>=4.0.0``
   :depends matchms: ``>=0.11.0``
   :depends numba: ``>=0.51``
   :depends numpy: 
   :depends python: ``>=3.7``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spec2vec

   and update with::

      conda update spec2vec

   or use the docker container::

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
        var versions = ["0.6.0"];
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