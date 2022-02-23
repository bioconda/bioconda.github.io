:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-corelist'
.. highlight: bash

perl-module-corelist
====================

.. conda:recipe:: perl-module-corelist
   :replaces_section_title:
   :noindex:

   what modules shipped with versions of perl

   :homepage: http://dev.perl.org/
   :license: perl_5
   :recipe: /`perl-module-corelist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-corelist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-corelist/meta.yaml>`_

   


.. conda:package:: perl-module-corelist

   |downloads_perl-module-corelist| |docker_perl-module-corelist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.20220220-0</code>,  <code>5.20220120-0</code>,  <code>5.20190524-1</code>,  <code>5.20190524-0</code>,  <code>5.20190420-0</code>,  <code>5.20181218-0</code>,  <code>5.20181130-0</code>,  <code>5.20180820-0</code>,  <code>5.20180626-0</code>,  </span></summary>
      

      ``5.20220220-0``,  ``5.20220120-0``,  ``5.20190524-1``,  ``5.20190524-0``,  ``5.20190420-0``,  ``5.20181218-0``,  ``5.20181130-0``,  ``5.20180820-0``,  ``5.20180626-0``,  ``5.20180120-1``,  ``5.20180120-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-version: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-corelist

   and update with::

      conda update perl-module-corelist

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-corelist:<tag>

   (see `perl-module-corelist/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-corelist| image:: https://img.shields.io/conda/dn/bioconda/perl-module-corelist.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-corelist
   :alt:   (downloads)
.. |docker_perl-module-corelist| image:: https://quay.io/repository/biocontainers/perl-module-corelist/status
   :target: https://quay.io/repository/biocontainers/perl-module-corelist
.. _`perl-module-corelist/tags`: https://quay.io/repository/biocontainers/perl-module-corelist?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-corelist";
        var versions = ["5.20220220","5.20220120","5.20190524","5.20190524","5.20190420"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-corelist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-corelist/README.html