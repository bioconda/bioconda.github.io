:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'csblast'
.. highlight: bash

csblast
=======

.. conda:recipe:: csblast/2.2.3
   :replaces_section_title:
   :noindex:

   Context\-specific extension of BLAST that significantly improves sensitivity and alignment quality.

   :homepage: http://wwwuser.gwdg.de/~compbiol/data/csblast/
   :license: GPL3
   :recipe: /`csblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csblast>`_/`2.2.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csblast/2.2.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csblast/2.2.3/meta.yaml>`_

   


.. conda:package:: csblast

   |downloads_csblast| |docker_csblast|

   :versions:
      
      

      ``2.2.3-3``,  ``2.2.3-2``,  ``2.2.3-1``,  ``2.2.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install csblast

   and update with::

      conda update csblast

   or use the docker container::

      docker pull quay.io/biocontainers/csblast:<tag>

   (see `csblast/tags`_ for valid values for ``<tag>``)


.. |downloads_csblast| image:: https://img.shields.io/conda/dn/bioconda/csblast.svg?style=flat
   :target: https://anaconda.org/bioconda/csblast
   :alt:   (downloads)
.. |docker_csblast| image:: https://quay.io/repository/biocontainers/csblast/status
   :target: https://quay.io/repository/biocontainers/csblast
.. _`csblast/tags`: https://quay.io/repository/biocontainers/csblast?tab=tags


.. raw:: html

    <script>
        var package = "csblast";
        var versions = ["2.2.3","2.2.3","2.2.3","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/csblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/csblast/README.html