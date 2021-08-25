:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'textinput'
.. highlight: bash

textinput
=========

.. conda:recipe:: textinput
   :replaces_section_title:
   :noindex:

   streamlined version of stdlib fileinput

   :homepage: http://www.ebi.ac.uk/~hoffman/software/textinput/
   :license: GNU General Public License (GPL)
   :recipe: /`textinput <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/textinput>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/textinput/meta.yaml>`_

   


.. conda:package:: textinput

   |downloads_textinput| |docker_textinput|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1.1-2``,  ``0.1.1-0``

      

   
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install textinput

   and update with::

      conda update textinput

   or use the docker container::

      docker pull quay.io/biocontainers/textinput:<tag>

   (see `textinput/tags`_ for valid values for ``<tag>``)


.. |downloads_textinput| image:: https://img.shields.io/conda/dn/bioconda/textinput.svg?style=flat
   :target: https://anaconda.org/bioconda/textinput
   :alt:   (downloads)
.. |docker_textinput| image:: https://quay.io/repository/biocontainers/textinput/status
   :target: https://quay.io/repository/biocontainers/textinput
.. _`textinput/tags`: https://quay.io/repository/biocontainers/textinput?tab=tags


.. raw:: html

    <script>
        var package = "textinput";
        var versions = ["0.2","0.2","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/textinput/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/textinput/README.html