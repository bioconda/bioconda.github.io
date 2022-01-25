:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meme'
.. highlight: bash

meme
====

.. conda:recipe:: meme
   :replaces_section_title:
   :noindex:

   Motif based sequence Analysis tools

   :homepage: http://meme-suite.org
   :license: Custom
   :recipe: /`meme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meme/meta.yaml>`_
   :links: biotools: :biotools:`meme_suite`, usegalaxy-eu: :usegalaxy-eu:`meme_dreme`

   


.. conda:package:: meme

   |downloads_meme| |docker_meme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.4.1-1</code>,  <code>5.4.1-0</code>,  <code>5.3.0-2</code>,  <code>5.3.0-0</code>,  <code>5.1.1-3</code>,  <code>5.1.1-2</code>,  <code>5.1.1-1</code>,  <code>5.1.1-0</code>,  <code>5.1.0-0</code>,  </span></summary>
      

      ``5.4.1-1``,  ``5.4.1-0``,  ``5.3.0-2``,  ``5.3.0-0``,  ``5.1.1-3``,  ``5.1.1-2``,  ``5.1.1-1``,  ``5.1.1-0``,  ``5.1.0-0``,  ``5.0.5-0``,  ``5.0.2-5``,  ``5.0.2-3``,  ``5.0.2-2``,  ``4.12.0-2``,  ``4.12.0-1``,  ``4.12.0-0``,  ``4.11.2-6``,  ``4.11.2-5``,  ``4.11.2-4``,  ``4.11.2-3``,  ``4.11.2-2``,  ``4.11.2-1``,  ``4.11.2-0``,  ``4.11.1-7``,  ``4.11.1-6``,  ``4.11.1-5``,  ``4.11.1-4``,  ``4.11.1-3``,  ``4.11.1-2``,  ``4.11.1-1``,  ``4.11.1-0``,  ``4.8.1-3``,  ``4.8.1-2``,  ``4.8.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends expat: ``>=2.4.3,<3.0a0``
   :depends ghostscript: 
   :depends icu: ``>=68.2,<69.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libxml2: ``>=2.9.12,<2.10.0a0``
   :depends libxslt: ``>=1.1.33,<2.0a0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends openmpi: ``>=4.1.2,<5.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-cgi: 
   :depends perl-file-which: 
   :depends perl-html-parser: 
   :depends perl-html-template: 
   :depends perl-html-tree: 
   :depends perl-json: 
   :depends perl-log-log4perl: 
   :depends perl-math-cdf: 
   :depends perl-xml-parser: 
   :depends perl-xml-simple: 
   :depends perl-yaml: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends yaml: ``>=0.2.5,<0.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meme

   and update with::

      conda update meme

   or use the docker container::

      docker pull quay.io/biocontainers/meme:<tag>

   (see `meme/tags`_ for valid values for ``<tag>``)


.. |downloads_meme| image:: https://img.shields.io/conda/dn/bioconda/meme.svg?style=flat
   :target: https://anaconda.org/bioconda/meme
   :alt:   (downloads)
.. |docker_meme| image:: https://quay.io/repository/biocontainers/meme/status
   :target: https://quay.io/repository/biocontainers/meme
.. _`meme/tags`: https://quay.io/repository/biocontainers/meme?tab=tags


.. raw:: html

    <script>
        var package = "meme";
        var versions = ["5.4.1","5.4.1","5.3.0","5.3.0","5.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meme/README.html