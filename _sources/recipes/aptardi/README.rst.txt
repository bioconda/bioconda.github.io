:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aptardi'
.. highlight: bash

aptardi
=======

.. conda:recipe:: aptardi
   :replaces_section_title:
   :noindex:

   aptardi is a tool that predicts polyA sites from RNA\-Seq data and DNA sequence

   :homepage: https://github.com/luskry/aptardi
   :license: MIT
   :recipe: /`aptardi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aptardi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aptardi/meta.yaml>`_

   


.. conda:package:: aptardi

   |downloads_aptardi| |docker_aptardi|

   :versions:
      
      

      ``1.4-0``

      

   
   :depends on h5py: ``<=2.10.0``
   :depends on numpy: ``<=1.19.5``
   :depends on pandas: ``>=1.0.3``
   :depends on python: ``>=3.7,<3.8``
   :depends on scikit-learn: ``>=0.24``
   :depends on tensorflow: ``2.0.0``

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

    pixi global install aptardi

to add into an existing workspace instead, run::

    pixi add aptardi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aptardi

Alternatively, to install into a new environment, run::

    conda create -n envname aptardi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aptardi:<tag>

(see `aptardi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aptardi| image:: https://img.shields.io/conda/dn/bioconda/aptardi.svg?style=flat
   :target: https://anaconda.org/bioconda/aptardi
   :alt:   (downloads)
.. |docker_aptardi| image:: https://quay.io/repository/biocontainers/aptardi/status
   :target: https://quay.io/repository/biocontainers/aptardi
.. _`aptardi/tags`: https://quay.io/repository/biocontainers/aptardi?tab=tags


.. raw:: html

    <script>
        var package = "aptardi";
        var versions = ["1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aptardi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aptardi/README.html