:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xunit-wrapper'
.. highlight: bash

xunit-wrapper
=============

.. conda:recipe:: xunit-wrapper
   :replaces_section_title:
   :noindex:

   Wrap python functions with a decorator to handle building XUnit reports.

   :homepage: https://github.com/TAMU-CPT/xunit-python-decorator
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`xunit-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xunit-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xunit-wrapper/meta.yaml>`_

   


.. conda:package:: xunit-wrapper

   |downloads_xunit-wrapper| |docker_xunit-wrapper|

   :versions:
      
      

      ``0.12-4``,  ``0.12-3``,  ``0.12-2``,  ``0.12-1``,  ``0.12-0``

      

   
   :depends on future: 
   :depends on junit-xml: 
   :depends on python: 

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

    pixi global install xunit-wrapper

to add into an existing workspace instead, run::

    pixi add xunit-wrapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install xunit-wrapper

Alternatively, to install into a new environment, run::

    conda create -n envname xunit-wrapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/xunit-wrapper:<tag>

(see `xunit-wrapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_xunit-wrapper| image:: https://img.shields.io/conda/dn/bioconda/xunit-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/xunit-wrapper
   :alt:   (downloads)
.. |docker_xunit-wrapper| image:: https://quay.io/repository/biocontainers/xunit-wrapper/status
   :target: https://quay.io/repository/biocontainers/xunit-wrapper
.. _`xunit-wrapper/tags`: https://quay.io/repository/biocontainers/xunit-wrapper?tab=tags


.. raw:: html

    <script>
        var package = "xunit-wrapper";
        var versions = ["0.12","0.12","0.12","0.12","0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xunit-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xunit-wrapper/README.html