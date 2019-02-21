:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pizzly'
.. highlight: bash

pizzly
======

.. conda:recipe:: pizzly
   :replaces_section_title:

   Fast fusion detection using kallisto

   :homepage: https://github.com/pmelsted/pizzly
   :license: BSD-2
   :recipe: /`pizzly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pizzly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pizzly/meta.yaml>`_

   


.. conda:package:: pizzly

   |downloads_pizzly| |docker_pizzly|

   :versions: 0.37.3-3, 0.37.3-2, 0.37.1-0
   
   :depends h5py: 
   
   :depends libgcc-ng: >=4.9
   
   :depends numpy: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pizzly

   and update with::

      conda update pizzly

   or use the docker container::

      docker pull quay.io/biocontainers/pizzly:<tag>

   (see `pizzly/tags`_ for valid values for ``<tag>``)


.. |downloads_pizzly| image:: https://img.shields.io/conda/dn/bioconda/pizzly.svg?style=flat
   :alt:   (downloads)
.. |docker_pizzly| image:: https://quay.io/repository/biocontainers/pizzly/status
   :target: https://quay.io/repository/biocontainers/pizzly
.. _`pizzly/tags`: https://quay.io/repository/biocontainers/pizzly?tab=tags






Notes
-----
Auxilliary scripts are available as commands \`\`pizzly\_flatten\_json.py\`\` and \`\`pizzly\_get\_fragment\_length.py\`\` along with the \`\`pizzly\`\` binary.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pizzly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pizzly/README.html