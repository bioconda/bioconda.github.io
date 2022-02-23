:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sra-tools'
.. highlight: bash

sra-tools
=========

.. conda:recipe:: sra-tools
   :replaces_section_title:
   :noindex:

   SRA Toolkit and SDK from NCBI

   :homepage: https://github.com/ncbi/sra-tools
   :license: Public Domain
   :recipe: /`sra-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sra-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sra-tools/meta.yaml>`_

   The SRA Toolkit and SDK from NCBI is a collection of tools and libraries
   for using data in the INSDC Sequence Read Archives.



.. conda:package:: sra-tools

   |downloads_sra-tools| |docker_sra-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.0-3</code>,  <code>2.11.0-2</code>,  <code>2.11.0-1</code>,  <code>2.11.0-0</code>,  <code>2.10.9-0</code>,  <code>2.10.8-0</code>,  <code>2.10.7-2</code>,  <code>2.10.7-1</code>,  <code>2.10.7-0</code>,  </span></summary>
      

      ``2.11.0-3``,  ``2.11.0-2``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.9-0``,  ``2.10.8-0``,  ``2.10.7-2``,  ``2.10.7-1``,  ``2.10.7-0``,  ``2.10.3-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.6-0``,  ``2.9.1_1-0``,  ``2.9.1-0``,  ``2.9.0-1``,  ``2.8.2-1``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.3-0``,  ``2.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends ca-certificates: 
   :depends curl: 
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libxml2: ``>=2.9.12,<2.10.0a0``
   :depends ncbi-ngs-sdk: 
   :depends ossuuid: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-uri: 
   :depends perl-xml-libxml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sra-tools

   and update with::

      conda update sra-tools

   or use the docker container::

      docker pull quay.io/biocontainers/sra-tools:<tag>

   (see `sra-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_sra-tools| image:: https://img.shields.io/conda/dn/bioconda/sra-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/sra-tools
   :alt:   (downloads)
.. |docker_sra-tools| image:: https://quay.io/repository/biocontainers/sra-tools/status
   :target: https://quay.io/repository/biocontainers/sra-tools
.. _`sra-tools/tags`: https://quay.io/repository/biocontainers/sra-tools?tab=tags


.. raw:: html

    <script>
        var package = "sra-tools";
        var versions = ["2.11.0","2.11.0","2.11.0","2.11.0","2.10.9"];
    </script>





Notes
-----
After installation\, you should run the configuration tool\: .\/vdb\-config \-i. This tool will setup your download\/cache area for downloaded files and references.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sra-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sra-tools/README.html