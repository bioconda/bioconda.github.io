:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'actc'
.. highlight: bash

actc
====

.. conda:recipe:: actc
   :replaces_section_title:
   :noindex:

   PacBio utility to align clr to ccs reads

   :homepage: https://github.com/PacificBiosciences/actc
   :license: BSD-3-Clause-Clear
   :recipe: /`actc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/actc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/actc/meta.yaml>`_

   


.. conda:package:: actc

   |downloads_actc| |docker_actc|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install actc

   and update with::

      conda update actc

   or use the docker container::

      docker pull quay.io/biocontainers/actc:<tag>

   (see `actc/tags`_ for valid values for ``<tag>``)


.. |downloads_actc| image:: https://img.shields.io/conda/dn/bioconda/actc.svg?style=flat
   :target: https://anaconda.org/bioconda/actc
   :alt:   (downloads)
.. |docker_actc| image:: https://quay.io/repository/biocontainers/actc/status
   :target: https://quay.io/repository/biocontainers/actc
.. _`actc/tags`: https://quay.io/repository/biocontainers/actc?tab=tags


.. raw:: html

    <script>
        var package = "actc";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/actc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/actc/README.html