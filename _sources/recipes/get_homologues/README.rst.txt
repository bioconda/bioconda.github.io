:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_homologues'
.. highlight: bash

get_homologues
==============

.. conda:recipe:: get_homologues
   :replaces_section_title:
   :noindex:

   A versatile software package for pan\-genome analysis\, including GET\_HOMOLOGUES and GET\_HOMOLOGUES\-EST

   :homepage: https://github.com/eead-csic-compbio/get_homologues
   :license: GPL3
   :recipe: /`get_homologues <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_homologues>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_homologues/meta.yaml>`_
   :links: biotools: :biotools:`get_homologues`, doi: :doi:`https://doi.org/10.1128/AEM.02411-13`, doi: :doi:`https://doi.org/10.3389/fpls.2017.00184`

   


.. conda:package:: get_homologues

   |downloads_get_homologues| |docker_get_homologues|

   :versions:
      
      

      ``3.5.1-0``

      

   
   :depends blast: 
   :depends cogtriangles: 
   :depends diamond: 
   :depends hmmer: 
   :depends mcl: 
   :depends perl: 
   :depends perl-gd: 
   :depends phylip: 
   :depends r-ape: 
   :depends r-base: 
   :depends r-dendextend: 
   :depends r-factoextra: 
   :depends r-gplots: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install get_homologues

   and update with::

      conda update get_homologues

   or use the docker container::

      docker pull quay.io/biocontainers/get_homologues:<tag>

   (see `get_homologues/tags`_ for valid values for ``<tag>``)


.. |downloads_get_homologues| image:: https://img.shields.io/conda/dn/bioconda/get_homologues.svg?style=flat
   :target: https://anaconda.org/bioconda/get_homologues
   :alt:   (downloads)
.. |docker_get_homologues| image:: https://quay.io/repository/biocontainers/get_homologues/status
   :target: https://quay.io/repository/biocontainers/get_homologues
.. _`get_homologues/tags`: https://quay.io/repository/biocontainers/get_homologues?tab=tags


.. raw:: html

    <script>
        var package = "get_homologues";
        var versions = ["3.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_homologues/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_homologues/README.html