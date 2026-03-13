:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bird_tool_utils_python'
.. highlight: bash

bird_tool_utils_python
======================

.. conda:recipe:: bird_tool_utils_python
   :replaces_section_title:
   :noindex:

   Python utilities used as part of the bird suite of bioinformatic tools.

   :homepage: https://github.com/wwood/bird_tool_utils-python
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bird_tool_utils_python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bird_tool_utils_python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bird_tool_utils_python/meta.yaml>`_

   


.. conda:package:: bird_tool_utils_python

   |downloads_bird_tool_utils_python| |docker_bird_tool_utils_python|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.1-0``,  ``0.4.1-0``,  ``0.3.6-0``,  ``0.2.17-0``

      

   
   :depends on argparse-manpage-birdtools: ``>=1.7.0``
   :depends on python: ``>=3.7``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bird_tool_utils_python

to add into an existing workspace instead, run::

    pixi add bird_tool_utils_python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bird_tool_utils_python

Alternatively, to install into a new environment, run::

    conda create -n envname bird_tool_utils_python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bird_tool_utils_python:<tag>

(see `bird_tool_utils_python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bird_tool_utils_python| image:: https://img.shields.io/conda/dn/bioconda/bird_tool_utils_python.svg?style=flat
   :target: https://anaconda.org/bioconda/bird_tool_utils_python
   :alt:   (downloads)
.. |docker_bird_tool_utils_python| image:: https://quay.io/repository/biocontainers/bird_tool_utils_python/status
   :target: https://quay.io/repository/biocontainers/bird_tool_utils_python
.. _`bird_tool_utils_python/tags`: https://quay.io/repository/biocontainers/bird_tool_utils_python?tab=tags


.. raw:: html

    <script>
        var package = "bird_tool_utils_python";
        var versions = ["0.6.0","0.5.1","0.4.1","0.3.6","0.2.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bird_tool_utils_python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bird_tool_utils_python/README.html