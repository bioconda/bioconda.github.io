:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbsim'
.. highlight: bash

pbsim
=====

.. conda:recipe:: pbsim
   :replaces_section_title:
   :noindex:

   PBSIM simulates PacBio reads

   :homepage: https://code.google.com/archive/p/pbsim/
   :license: GPLv2
   :recipe: /`pbsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim/meta.yaml>`_

   


.. conda:package:: pbsim

   |downloads_pbsim| |docker_pbsim|

   :versions:
      
      

      ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbsim

   and update with::

      conda update pbsim

   or use the docker container::

      docker pull quay.io/biocontainers/pbsim:<tag>

   (see `pbsim/tags`_ for valid values for ``<tag>``)


.. |downloads_pbsim| image:: https://img.shields.io/conda/dn/bioconda/pbsim.svg?style=flat
   :target: https://anaconda.org/bioconda/pbsim
   :alt:   (downloads)
.. |docker_pbsim| image:: https://quay.io/repository/biocontainers/pbsim/status
   :target: https://quay.io/repository/biocontainers/pbsim
.. _`pbsim/tags`: https://quay.io/repository/biocontainers/pbsim?tab=tags


.. raw:: html

    <script>
        var package = "pbsim";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbsim/README.html