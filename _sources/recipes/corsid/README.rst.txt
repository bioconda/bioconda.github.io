:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corsid'
.. highlight: bash

corsid
======

.. conda:recipe:: corsid
   :replaces_section_title:
   :noindex:

   Core Sequence Identifier

   :homepage: http://github.com/elkebir-group/CORSID
   :license: MIT / MIT
   :recipe: /`corsid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corsid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corsid/meta.yaml>`_

   


.. conda:package:: corsid

   |downloads_corsid| |docker_corsid|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends numpy: 
   :depends packaging: 
   :depends pandas: 
   :depends pysam: 
   :depends pytablewriter: 
   :depends python: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install corsid

   and update with::

      conda update corsid

   or use the docker container::

      docker pull quay.io/biocontainers/corsid:<tag>

   (see `corsid/tags`_ for valid values for ``<tag>``)


.. |downloads_corsid| image:: https://img.shields.io/conda/dn/bioconda/corsid.svg?style=flat
   :target: https://anaconda.org/bioconda/corsid
   :alt:   (downloads)
.. |docker_corsid| image:: https://quay.io/repository/biocontainers/corsid/status
   :target: https://quay.io/repository/biocontainers/corsid
.. _`corsid/tags`: https://quay.io/repository/biocontainers/corsid?tab=tags


.. raw:: html

    <script>
        var package = "corsid";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corsid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corsid/README.html