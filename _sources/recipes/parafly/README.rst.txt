.. title:: Package Recipe 'parafly'
.. highlight: bash


parafly
=======

.. conda:recipe:: parafly
   :replaces_section_title:

   Given a file containing a list of unix commands\, multithreading is used to process the commands in parallel on a single server. Success\/failure is captured\, and failed commands are retained and reported.

   :homepage: http://parafly.sourceforge.net/
   :license: The Broad Institute (own license thingy)
   :recipe: /`parafly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parafly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parafly/meta.yaml>`_

   


.. conda:package:: parafly

   |downloads_parafly| |docker_parafly|

   :versions: r2013_01_21

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_parafly|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parafly

   and update with::

      conda update parafly

   or use the docker container::

      docker pull quay.io/repository/biocontainers/parafly


.. |required_by_parafly| conda:required_by:: parafly
.. |downloads_parafly| image:: https://img.shields.io/conda/dn/bioconda/parafly.svg?style=flat
   :alt:   (downloads)
.. |docker_parafly| image:: https://quay.io/repository/biocontainers/parafly/status
   :target: https://quay.io/repository/biocontainers/parafly







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parafly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parafly/README.html

