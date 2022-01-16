:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linkstats'
.. highlight: bash

linkstats
=========

.. conda:recipe:: linkstats
   :replaces_section_title:
   :noindex:

   Collect and process statistics from aligned linked\-reads.

   :homepage: https://github.com/wtsi-hpag/LinkStats
   :license: MIT / MIT
   :recipe: /`linkstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkstats/meta.yaml>`_

   


.. conda:package:: linkstats

   |downloads_linkstats| |docker_linkstats|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends click: ``>=8.0.3``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends matplotlib-base: ``>=3.5.1``
   :depends numpy: ``>=1.22.0``
   :depends pandas: ``>=1.3.5``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends seaborn: ``>=0.11.2``
   :depends tqdm: ``>=4.62.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install linkstats

   and update with::

      conda update linkstats

   or use the docker container::

      docker pull quay.io/biocontainers/linkstats:<tag>

   (see `linkstats/tags`_ for valid values for ``<tag>``)


.. |downloads_linkstats| image:: https://img.shields.io/conda/dn/bioconda/linkstats.svg?style=flat
   :target: https://anaconda.org/bioconda/linkstats
   :alt:   (downloads)
.. |docker_linkstats| image:: https://quay.io/repository/biocontainers/linkstats/status
   :target: https://quay.io/repository/biocontainers/linkstats
.. _`linkstats/tags`: https://quay.io/repository/biocontainers/linkstats?tab=tags


.. raw:: html

    <script>
        var package = "linkstats";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linkstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linkstats/README.html