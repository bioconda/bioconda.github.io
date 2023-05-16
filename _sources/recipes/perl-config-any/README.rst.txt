:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-config-any'
.. highlight: bash

perl-config-any
===============

.. conda:recipe:: perl-config-any
   :replaces_section_title:
   :noindex:

   Load configuration from different file formats\, transparently

   :homepage: http://metacpan.org/pod/Config-Any
   :license: perl_5
   :recipe: /`perl-config-any <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-any>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-any/meta.yaml>`_

   


.. conda:package:: perl-config-any

   |downloads_perl-config-any| |docker_perl-config-any|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.33-2</code>,  <code>0.33-1</code>,  <code>0.33-0</code>,  <code>0.32-3</code>,  <code>0.32-2</code>,  <code>0.32-1</code>,  <code>0.32-0</code>,  <code>0.27-2</code>,  <code>0.27-1</code>,  </span></summary>
      

      ``0.33-2``,  ``0.33-1``,  ``0.33-0``,  ``0.32-3``,  ``0.32-2``,  ``0.32-1``,  ``0.32-0``,  ``0.27-2``,  ``0.27-1``,  ``0.27-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-config-any

   and update with::

      conda update perl-config-any

   or use the docker container::

      docker pull quay.io/biocontainers/perl-config-any:<tag>

   (see `perl-config-any/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-config-any| image:: https://img.shields.io/conda/dn/bioconda/perl-config-any.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-config-any
   :alt:   (downloads)
.. |docker_perl-config-any| image:: https://quay.io/repository/biocontainers/perl-config-any/status
   :target: https://quay.io/repository/biocontainers/perl-config-any
.. _`perl-config-any/tags`: https://quay.io/repository/biocontainers/perl-config-any?tab=tags


.. raw:: html

    <script>
        var package = "perl-config-any";
        var versions = ["0.33","0.33","0.33","0.32","0.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-any/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-any/README.html