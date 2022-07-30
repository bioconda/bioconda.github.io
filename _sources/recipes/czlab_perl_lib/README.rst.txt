:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'czlab_perl_lib'
.. highlight: bash

czlab_perl_lib
==============

.. conda:recipe:: czlab_perl_lib
   :replaces_section_title:
   :noindex:

   mCross Perl script

   :homepage: https://github.com/huijfeng/czlab_perl_lib
   :license: MIT
   :recipe: /`czlab_perl_lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/czlab_perl_lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/czlab_perl_lib/meta.yaml>`_

   czlab\_per\_lib is the core CLI and perl library used in mCross\, which is a bioinformatic tool to identify RNA\-protein cross\-link sites. See details of the methods in Feng et al. \(2019\)\, Modeling the in vivo specificity of RNA\-binding proteins by precisely registering protein\-RNA crosslink sites. Mol Cell. 74\:1189\-1204.E6.


.. conda:package:: czlab_perl_lib

   |downloads_czlab_perl_lib| |docker_czlab_perl_lib|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install czlab_perl_lib

   and update with::

      conda update czlab_perl_lib

   or use the docker container::

      docker pull quay.io/biocontainers/czlab_perl_lib:<tag>

   (see `czlab_perl_lib/tags`_ for valid values for ``<tag>``)


.. |downloads_czlab_perl_lib| image:: https://img.shields.io/conda/dn/bioconda/czlab_perl_lib.svg?style=flat
   :target: https://anaconda.org/bioconda/czlab_perl_lib
   :alt:   (downloads)
.. |docker_czlab_perl_lib| image:: https://quay.io/repository/biocontainers/czlab_perl_lib/status
   :target: https://quay.io/repository/biocontainers/czlab_perl_lib
.. _`czlab_perl_lib/tags`: https://quay.io/repository/biocontainers/czlab_perl_lib?tab=tags


.. raw:: html

    <script>
        var package = "czlab_perl_lib";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/czlab_perl_lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/czlab_perl_lib/README.html