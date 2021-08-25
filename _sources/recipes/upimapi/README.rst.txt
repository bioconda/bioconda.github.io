:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'upimapi'
.. highlight: bash

upimapi
=======

.. conda:recipe:: upimapi
   :replaces_section_title:
   :noindex:

   UniProt Id Mapping through API

   :homepage: https://github.com/iquasere/UPIMAPI
   :documentation: https://github.com/iquasere/UPIMAPI/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`upimapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/upimapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/upimapi/meta.yaml>`_

   UPIMAPI takes as input either a list of UniProt IDs or a blast file from
   annotation using UniProt database as reference and uses UniProt\'s API to
   retrieve information relative to those IDs. It is essentially a command
   line implementation of UniProt\'s ID mapping web service available at
   https\:\/\/www.uniprot.org\/uploadlists\/\, allowing for retrieval of information
   from thousands of IDs in one go\, while still relying on the web service.



.. conda:package:: upimapi

   |downloads_upimapi| |docker_upimapi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends diamond: 
   :depends openpyxl: 
   :depends pandas: 
   :depends progressbar: 
   :depends psutil: 
   :depends tqdm: 
   :depends xlrd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install upimapi

   and update with::

      conda update upimapi

   or use the docker container::

      docker pull quay.io/biocontainers/upimapi:<tag>

   (see `upimapi/tags`_ for valid values for ``<tag>``)


.. |downloads_upimapi| image:: https://img.shields.io/conda/dn/bioconda/upimapi.svg?style=flat
   :target: https://anaconda.org/bioconda/upimapi
   :alt:   (downloads)
.. |docker_upimapi| image:: https://quay.io/repository/biocontainers/upimapi/status
   :target: https://quay.io/repository/biocontainers/upimapi
.. _`upimapi/tags`: https://quay.io/repository/biocontainers/upimapi?tab=tags


.. raw:: html

    <script>
        var package = "upimapi";
        var versions = ["1.3.0","1.2.2","1.2.1","1.2.0","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/upimapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/upimapi/README.html