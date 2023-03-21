:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krakenuniq'
.. highlight: bash

krakenuniq
==========

.. conda:recipe:: krakenuniq
   :replaces_section_title:
   :noindex:

   Metagenomics classifier with unique k\-mer counting for more specific results

   :homepage: https://github.com/fbreitwieser/krakenuniq
   :license: GPLv3
   :recipe: /`krakenuniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakenuniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakenuniq/meta.yaml>`_
   :links: biotools: :biotools:`krakenhll`

   


.. conda:package:: krakenuniq

   |downloads_krakenuniq| |docker_krakenuniq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1a-1</code>,  <code>1.0.1a-0</code>,  <code>1.0.0-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  </span></summary>
      

      ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1a-1``,  ``1.0.1a-0``,  ``1.0.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``,  ``0.5.8-4``,  ``0.5.8-3``,  ``0.5.8-2``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: 
   :depends kmer-jellyfish: ``>=1,<2``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-libwww-perl: 
   :depends perl-lwp-protocol-https: 
   :depends rsync: 
   :depends tar: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krakenuniq

   and update with::

      conda update krakenuniq

   or use the docker container::

      docker pull quay.io/biocontainers/krakenuniq:<tag>

   (see `krakenuniq/tags`_ for valid values for ``<tag>``)


.. |downloads_krakenuniq| image:: https://img.shields.io/conda/dn/bioconda/krakenuniq.svg?style=flat
   :target: https://anaconda.org/bioconda/krakenuniq
   :alt:   (downloads)
.. |docker_krakenuniq| image:: https://quay.io/repository/biocontainers/krakenuniq/status
   :target: https://quay.io/repository/biocontainers/krakenuniq
.. _`krakenuniq/tags`: https://quay.io/repository/biocontainers/krakenuniq?tab=tags


.. raw:: html

    <script>
        var package = "krakenuniq";
        var versions = ["1.0.3","1.0.3","1.0.2","1.0.1a","1.0.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakenuniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakenuniq/README.html