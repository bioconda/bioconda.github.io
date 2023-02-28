:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gassst'
.. highlight: bash

gassst
======

.. conda:recipe:: gassst
   :replaces_section_title:
   :noindex:

   GASSST \: Global Alignment Short Sequence Search Tool

   :homepage: https://www.irisa.fr/symbiose/projects/gassst/
   :license: CeCILL FREE SOFTWARE LICENSE AGREEMENT
   :recipe: /`gassst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gassst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gassst/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btq485`

   


.. conda:package:: gassst

   |downloads_gassst| |docker_gassst|

   :versions:
      
      

      ``1.28-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gassst

   and update with::

      conda update gassst

   or use the docker container::

      docker pull quay.io/biocontainers/gassst:<tag>

   (see `gassst/tags`_ for valid values for ``<tag>``)


.. |downloads_gassst| image:: https://img.shields.io/conda/dn/bioconda/gassst.svg?style=flat
   :target: https://anaconda.org/bioconda/gassst
   :alt:   (downloads)
.. |docker_gassst| image:: https://quay.io/repository/biocontainers/gassst/status
   :target: https://quay.io/repository/biocontainers/gassst
.. _`gassst/tags`: https://quay.io/repository/biocontainers/gassst?tab=tags


.. raw:: html

    <script>
        var package = "gassst";
        var versions = ["1.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gassst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gassst/README.html