.. title:: Package Recipe 'textinput'
.. highlight: bash


textinput
=========

.. conda:recipe:: textinput
   :replaces_section_title:

   streamlined version of stdlib fileinput

   :homepage: http://www.ebi.ac.uk/~hoffman/software/textinput/
   :license: GNU General Public License (GPL)
   :recipe: /`textinput <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/textinput>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/textinput/meta.yaml>`_

   


.. conda:package:: textinput

   |downloads_textinput| |docker_textinput|

   :versions: 0.2, 0.1.1

   :depends: :conda:package:`python`  :conda:package:`six`  

   :required~by: |required_by_textinput|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install textinput

   and update with::

      conda update textinput

   or use the docker container::

      docker pull quay.io/repository/biocontainers/textinput


.. |required_by_textinput| conda:required_by:: textinput
.. |downloads_textinput| image:: https://img.shields.io/conda/dn/bioconda/textinput.svg?style=flat
   :alt:   (downloads)
.. |docker_textinput| image:: https://quay.io/repository/biocontainers/textinput/status
   :target: https://quay.io/repository/biocontainers/textinput







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/textinput/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/textinput/README.html

