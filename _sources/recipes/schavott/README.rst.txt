.. title:: Package Recipe 'schavott'
.. highlight: bash


schavott
========

.. conda:recipe:: schavott
   :replaces_section_title:

   Assembly and scaffolding of bacterial genomes in real time using MinION\-sequencing.

   :homepage: http://github.com/emilhaegglund/schavott
   :license: MIT
   :recipe: /`schavott <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schavott>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schavott/meta.yaml>`_

   


.. conda:package:: schavott

   |downloads_schavott| |docker_schavott|

   :versions: 0.5.0, 0.4.1, 0.3, 0.2

   :depends: :conda:package:`bokeh`  :conda:package:`h5py` >=2.2.0 :conda:package:`numpy`  :conda:package:`pyfasta`  :conda:package:`python` 2.7* :conda:package:`watchdog` >=0.8.3 

   :required~by: |required_by_schavott|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install schavott

   and update with::

      conda update schavott

   or use the docker container::

      docker pull quay.io/repository/biocontainers/schavott


.. |required_by_schavott| conda:required_by:: schavott
.. |downloads_schavott| image:: https://img.shields.io/conda/dn/bioconda/schavott.svg?style=flat
   :alt:   (downloads)
.. |docker_schavott| image:: https://quay.io/repository/biocontainers/schavott/status
   :target: https://quay.io/repository/biocontainers/schavott







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schavott/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schavott/README.html

