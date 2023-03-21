:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'efishent'
.. highlight: bash

efishent
========

.. conda:recipe:: efishent
   :replaces_section_title:
   :noindex:

   A tool to design RNA FISH oligos\/probes

   :homepage: https://github.com/bbquercus/eFISHent/
   :license: MIT / MIT
   :recipe: /`efishent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/efishent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/efishent/meta.yaml>`_

   


.. conda:package:: efishent

   |downloads_efishent| |docker_efishent|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bowtie: 
   :depends entrez-direct: 
   :depends gtfparse: 
   :depends jellyfish: 
   :depends luigi: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pyarrow: 
   :depends pyomo: 
   :depends pysam: 
   :depends python: ``>=3.9``
   :depends rnastructure: 
   :depends samtools: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install efishent

   and update with::

      conda update efishent

   or use the docker container::

      docker pull quay.io/biocontainers/efishent:<tag>

   (see `efishent/tags`_ for valid values for ``<tag>``)


.. |downloads_efishent| image:: https://img.shields.io/conda/dn/bioconda/efishent.svg?style=flat
   :target: https://anaconda.org/bioconda/efishent
   :alt:   (downloads)
.. |docker_efishent| image:: https://quay.io/repository/biocontainers/efishent/status
   :target: https://quay.io/repository/biocontainers/efishent
.. _`efishent/tags`: https://quay.io/repository/biocontainers/efishent?tab=tags


.. raw:: html

    <script>
        var package = "efishent";
        var versions = ["0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/efishent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/efishent/README.html