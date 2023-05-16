:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fununifrac'
.. highlight: bash

fununifrac
==========

.. conda:recipe:: fununifrac
   :replaces_section_title:
   :noindex:

   A repository to implement UniFrac\, but on functional profiles of metagenomic data.

   :homepage: https://github.com/KoslickiLab/FunUniFrac
   :license: BSD / BSD-3-Clause
   :recipe: /`fununifrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fununifrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fununifrac/meta.yaml>`_

   


.. conda:package:: fununifrac

   |downloads_fununifrac| |docker_fununifrac|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends blist: 
   :depends networkx: ``2.8.4.*``
   :depends numpy: ``1.23.2.*``
   :depends pandas: ``1.4.3.*``
   :depends pyemd: ``0.5.1.*``
   :depends pytest: 
   :depends python: 
   :depends requests: 
   :depends scipy: ``1.8.0.*``
   :depends seaborn: 
   :depends sparse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fununifrac

   and update with::

      conda update fununifrac

   or use the docker container::

      docker pull quay.io/biocontainers/fununifrac:<tag>

   (see `fununifrac/tags`_ for valid values for ``<tag>``)


.. |downloads_fununifrac| image:: https://img.shields.io/conda/dn/bioconda/fununifrac.svg?style=flat
   :target: https://anaconda.org/bioconda/fununifrac
   :alt:   (downloads)
.. |docker_fununifrac| image:: https://quay.io/repository/biocontainers/fununifrac/status
   :target: https://quay.io/repository/biocontainers/fununifrac
.. _`fununifrac/tags`: https://quay.io/repository/biocontainers/fununifrac?tab=tags


.. raw:: html

    <script>
        var package = "fununifrac";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fununifrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fununifrac/README.html