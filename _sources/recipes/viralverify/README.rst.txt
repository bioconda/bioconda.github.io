:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viralverify'
.. highlight: bash

viralverify
===========

.. conda:recipe:: viralverify
   :replaces_section_title:
   :noindex:

   viral contig verification tool

   :homepage: https://github.com/ablab/viralVerify
   :license: GPLv3
   :recipe: /`viralverify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralverify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralverify/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa490`

   


.. conda:package:: viralverify

   |downloads_viralverify| |docker_viralverify|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends hmmer: ``>=3.0``
   :depends prodigal: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install viralverify

   and update with::

      conda update viralverify

   or use the docker container::

      docker pull quay.io/biocontainers/viralverify:<tag>

   (see `viralverify/tags`_ for valid values for ``<tag>``)


.. |downloads_viralverify| image:: https://img.shields.io/conda/dn/bioconda/viralverify.svg?style=flat
   :target: https://anaconda.org/bioconda/viralverify
   :alt:   (downloads)
.. |docker_viralverify| image:: https://quay.io/repository/biocontainers/viralverify/status
   :target: https://quay.io/repository/biocontainers/viralverify
.. _`viralverify/tags`: https://quay.io/repository/biocontainers/viralverify?tab=tags


.. raw:: html

    <script>
        var package = "viralverify";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viralverify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viralverify/README.html