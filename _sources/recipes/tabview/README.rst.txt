.. title:: Package Recipe 'tabview'
.. highlight: bash


tabview
=======

.. conda:recipe:: tabview
   :replaces_section_title:

   A curses command\-line CSV and list \(tabular data\) viewer

   :homepage: https://github.com/firecat53/tabview
   :license: MIT License
   :recipe: /`tabview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabview/meta.yaml>`_

   


.. conda:package:: tabview

   |downloads_tabview| |docker_tabview|

   :versions: 1.4.3, 1.4.2

   :depends: :conda:package:`ncurses` >=6.1,<6.2.0a0 :conda:package:`python`  

   :required~by: |required_by_tabview|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tabview

   and update with::

      conda update tabview

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tabview


.. |required_by_tabview| conda:required_by:: tabview
.. |downloads_tabview| image:: https://img.shields.io/conda/dn/bioconda/tabview.svg?style=flat
   :alt:   (downloads)
.. |docker_tabview| image:: https://quay.io/repository/biocontainers/tabview/status
   :target: https://quay.io/repository/biocontainers/tabview







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tabview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tabview/README.html

