:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agat'
.. highlight: bash

agat
====

.. conda:recipe:: agat
   :replaces_section_title:
   :noindex:

   Another Gff Analysis Toolkit \(AGAT\). Suite of tools to handle gene annotations in any GTF\/GFF format.

   :homepage: https://github.com/NBISweden/AGAT
   :license: GPL / GPLv3
   :recipe: /`agat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agat/meta.yaml>`_

   


.. conda:package:: agat

   |downloads_agat| |docker_agat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libdb: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: ``>=1.7.8``
   :depends perl-clone: 
   :depends perl-file-share: 
   :depends perl-file-sharedir-install: 
   :depends perl-graph: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-simple: ``>=6.39``
   :depends perl-moose: 
   :depends perl-sort-naturally: 
   :depends perl-term-progressbar: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install agat

   and update with::

      conda update agat

   or use the docker container::

      docker pull quay.io/biocontainers/agat:<tag>

   (see `agat/tags`_ for valid values for ``<tag>``)


.. |downloads_agat| image:: https://img.shields.io/conda/dn/bioconda/agat.svg?style=flat
   :target: https://anaconda.org/bioconda/agat
   :alt:   (downloads)
.. |docker_agat| image:: https://quay.io/repository/biocontainers/agat/status
   :target: https://quay.io/repository/biocontainers/agat
.. _`agat/tags`: https://quay.io/repository/biocontainers/agat?tab=tags


.. raw:: html

    <script>
        var package = "agat";
        var versions = ["0.8.1","0.8.1","0.8.0","0.6.2","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agat/README.html