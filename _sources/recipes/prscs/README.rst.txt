:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prscs'
.. highlight: bash

prscs
=====

.. conda:recipe:: prscs
   :replaces_section_title:
   :noindex:

   PRS\-CS is a Python based command line tool that infers posterior SNP effect sizes under continuous shrinkage \(CS\) priors using GWAS summary statistics and an external LD reference panel.


   :homepage: https://github.com/getian107/PRScs
   :license: MIT
   :recipe: /`prscs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prscs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prscs/meta.yaml>`_

   


.. conda:package:: prscs

   |downloads_prscs| |docker_prscs|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends h5py: 
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prscs

   and update with::

      conda update prscs

   or use the docker container::

      docker pull quay.io/biocontainers/prscs:<tag>

   (see `prscs/tags`_ for valid values for ``<tag>``)


.. |downloads_prscs| image:: https://img.shields.io/conda/dn/bioconda/prscs.svg?style=flat
   :target: https://anaconda.org/bioconda/prscs
   :alt:   (downloads)
.. |docker_prscs| image:: https://quay.io/repository/biocontainers/prscs/status
   :target: https://quay.io/repository/biocontainers/prscs
.. _`prscs/tags`: https://quay.io/repository/biocontainers/prscs?tab=tags


.. raw:: html

    <script>
        var package = "prscs";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prscs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prscs/README.html