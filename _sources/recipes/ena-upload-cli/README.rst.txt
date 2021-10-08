:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ena-upload-cli'
.. highlight: bash

ena-upload-cli
==============

.. conda:recipe:: ena-upload-cli
   :replaces_section_title:
   :noindex:

   Command Line Interface to upload data to the European Nucleotide Archive

   :homepage: https://github.com/usegalaxy-eu/ena-upload-cli
   :license: MIT / MIT
   :recipe: /`ena-upload-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-upload-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-upload-cli/meta.yaml>`_

   


.. conda:package:: ena-upload-cli

   |downloads_ena-upload-cli| |docker_ena-upload-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.8-0</code>,  <code>0.2.7-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  </span></summary>
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends genshi: 
   :depends lxml: 
   :depends pandas: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ena-upload-cli

   and update with::

      conda update ena-upload-cli

   or use the docker container::

      docker pull quay.io/biocontainers/ena-upload-cli:<tag>

   (see `ena-upload-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_ena-upload-cli| image:: https://img.shields.io/conda/dn/bioconda/ena-upload-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/ena-upload-cli
   :alt:   (downloads)
.. |docker_ena-upload-cli| image:: https://quay.io/repository/biocontainers/ena-upload-cli/status
   :target: https://quay.io/repository/biocontainers/ena-upload-cli
.. _`ena-upload-cli/tags`: https://quay.io/repository/biocontainers/ena-upload-cli?tab=tags


.. raw:: html

    <script>
        var package = "ena-upload-cli";
        var versions = ["0.4.2","0.4.1","0.4.0","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ena-upload-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ena-upload-cli/README.html