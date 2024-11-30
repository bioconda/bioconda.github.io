:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idr-py'
.. highlight: bash

idr-py
======

.. conda:recipe:: idr-py
   :replaces_section_title:
   :noindex:

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

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.0-0``,  ``0.4.0.dev3-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends ipython: 
   :depends ipywidgets: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends python-omero: 
   :depends requests: 
   :depends seaborn: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install idr-py

   and update with::

      mamba update idr-py

  To create a new environment, run::

      mamba create --name myenvname idr-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/idr-py:<tag>

   (see `idr-py/tags`_ for valid values for ``<tag>``)


.. |downloads_idr-py| image:: https://img.shields.io/conda/dn/bioconda/idr-py.svg?style=flat
   :target: https://anaconda.org/bioconda/idr-py
   :alt:   (downloads)
.. |docker_idr-py| image:: https://quay.io/repository/biocontainers/idr-py/status
   :target: https://quay.io/repository/biocontainers/idr-py
.. _`idr-py/tags`: https://quay.io/repository/biocontainers/idr-py?tab=tags


.. raw:: html

    <script>
        var package = "idr-py";
        var versions = ["0.4.2","0.4.0","0.4.0.dev3","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idr-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idr-py/README.html