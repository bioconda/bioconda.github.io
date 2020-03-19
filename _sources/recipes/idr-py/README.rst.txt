:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idr-py'
.. highlight: bash

idr-py
======

.. conda:recipe:: idr-py
   :replaces_section_title:

   Helper methods for accessing the Image Data Resource \(IDR\)

   :homepage: https://github.com/IDR/idr-py
   :documentation: https://idr.openmicroscopy.org/about/api.html
   
   :license: GPL2 / GPL-2.0+
   :recipe: /`idr-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idr-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idr-py/meta.yaml>`_

   \.. image\:\: https\:\/\/travis\-ci.org\/IDR\/idr\-py.svg\?branch\=master
       \:target\: https\:\/\/travis\-ci.org\/IDR\/idr\-py

   .. image\:\: https\:\/\/badge.fury.io\/py\/idr\-py.svg
       \:target\: https\:\/\/badge.fury.io\/py\/idr\-py

   IDR\-PY
   \=\=\=\=\=\=

   Library with helper methods for accessing the Image Data Resource \(IDR\).

   Requirements
   \=\=\=\=\=\=\=\=\=\=\=\=

    \* OMERO.py 5.6.x
    \* Python 3

   Installing from PyPI
   \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=

   This section assumes that an OMERO.web is already installed.


   Install the app using \`pip \<https\:\/\/pip.pypa.io\/en\/stable\/\>\`\_\:

   \:\:

       \$ pip install \-U idr\-py


   License
   \-\-\-\-\-\-\-

   This project\, similar to many Open Microscopy Environment \(OME\) projects\, is licensed under the terms of the GNU General Public License \(GPL\) v2 or later.

   Copyright
   \-\-\-\-\-\-\-\-\-

   2017\-2020\, The Open Microscopy Environment


.. conda:package:: idr-py

   |downloads_idr-py| |docker_idr-py|

   :versions: 0.4.0-0, 0.4.0.dev3-0, 0.3.0-1, 0.3.0-0, 0.2.1-0, 0.2.0-0
   
   :depends ipython: 
   :depends ipywidgets: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: >=3
   :depends python-omero: 
   :depends requests: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install idr-py

   and update with::

      conda update idr-py

   or use the docker container::

      docker pull quay.io/biocontainers/idr-py:<tag>

   (see `idr-py/tags`_ for valid values for ``<tag>``)


.. |downloads_idr-py| image:: https://img.shields.io/conda/dn/bioconda/idr-py.svg?style=flat
   :target: https://anaconda.org/bioconda/idr-py
   :alt:   (downloads)
.. |docker_idr-py| image:: https://quay.io/repository/biocontainers/idr-py/status
   :target: https://quay.io/repository/biocontainers/idr-py
.. _`idr-py/tags`: https://quay.io/repository/biocontainers/idr-py?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idr-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idr-py/README.html