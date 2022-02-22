:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coatran'
.. highlight: bash

coatran
=======

.. conda:recipe:: coatran
   :replaces_section_title:
   :noindex:

   CoaTran\: Coalescent tree simulation along a transmission network

   :homepage: https://github.com/niemasd/CoaTran
   :license: GPL / GPLv3
   :recipe: /`coatran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coatran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coatran/meta.yaml>`_
   :links: biotools: :biotools:`coatran`

   


.. conda:package:: coatran

   |downloads_coatran| |docker_coatran|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coatran

   and update with::

      conda update coatran

   or use the docker container::

      docker pull quay.io/biocontainers/coatran:<tag>

   (see `coatran/tags`_ for valid values for ``<tag>``)


.. |downloads_coatran| image:: https://img.shields.io/conda/dn/bioconda/coatran.svg?style=flat
   :target: https://anaconda.org/bioconda/coatran
   :alt:   (downloads)
.. |docker_coatran| image:: https://quay.io/repository/biocontainers/coatran/status
   :target: https://quay.io/repository/biocontainers/coatran
.. _`coatran/tags`: https://quay.io/repository/biocontainers/coatran?tab=tags


.. raw:: html

    <script>
        var package = "coatran";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coatran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coatran/README.html