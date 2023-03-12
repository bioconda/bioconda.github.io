:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baypass'
.. highlight: bash

baypass
=======

.. conda:recipe:: baypass
   :replaces_section_title:
   :noindex:

   Genome\-Wide Scan for Adaptive Differentiation and Association Analysis with population\-specific covariables.

   :homepage: http://www1.montpellier.inra.fr/CBGP/software/baypass/index.html
   :license: CECILL-B
   :recipe: /`baypass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baypass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baypass/meta.yaml>`_

   


.. conda:package:: baypass

   |downloads_baypass| |docker_baypass|

   :versions:
      
      

      ``2.31-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install baypass

   and update with::

      conda update baypass

   or use the docker container::

      docker pull quay.io/biocontainers/baypass:<tag>

   (see `baypass/tags`_ for valid values for ``<tag>``)


.. |downloads_baypass| image:: https://img.shields.io/conda/dn/bioconda/baypass.svg?style=flat
   :target: https://anaconda.org/bioconda/baypass
   :alt:   (downloads)
.. |docker_baypass| image:: https://quay.io/repository/biocontainers/baypass/status
   :target: https://quay.io/repository/biocontainers/baypass
.. _`baypass/tags`: https://quay.io/repository/biocontainers/baypass?tab=tags


.. raw:: html

    <script>
        var package = "baypass";
        var versions = ["2.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baypass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baypass/README.html