:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forwardgenomics'
.. highlight: bash

forwardgenomics
===============

.. conda:recipe:: forwardgenomics
   :replaces_section_title:
   :noindex:

   Forward Genomics is a framework to associate phenotypic differences between species to differences in their genomes


   :homepage: https://github.com/hillerlab/ForwardGenomics
   :license: MIT license
   :recipe: /`forwardgenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forwardgenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forwardgenomics/meta.yaml>`_

   


.. conda:package:: forwardgenomics

   |downloads_forwardgenomics| |docker_forwardgenomics|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends perl: 
   :depends phast: 
   :depends r-base: 
   :depends r-caper: 
   :depends r-isotone: 
   :depends r-phangorn: 
   :depends r-weights: 
   :depends r-xtermstyle: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install forwardgenomics

   and update with::

      conda update forwardgenomics

   or use the docker container::

      docker pull quay.io/biocontainers/forwardgenomics:<tag>

   (see `forwardgenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_forwardgenomics| image:: https://img.shields.io/conda/dn/bioconda/forwardgenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/forwardgenomics
   :alt:   (downloads)
.. |docker_forwardgenomics| image:: https://quay.io/repository/biocontainers/forwardgenomics/status
   :target: https://quay.io/repository/biocontainers/forwardgenomics
.. _`forwardgenomics/tags`: https://quay.io/repository/biocontainers/forwardgenomics?tab=tags


.. raw:: html

    <script>
        var package = "forwardgenomics";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forwardgenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forwardgenomics/README.html