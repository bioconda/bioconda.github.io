:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'appspam'
.. highlight: bash

appspam
=======

.. conda:recipe:: appspam
   :replaces_section_title:
   :noindex:

   Alignment\-free Phylogenetic Placement algorithm based on Spaced\-word Matches

   :homepage: https://github.com/matthiasblanke/App-SpaM/
   :documentation: https://github.com/matthiasblanke/App-SpaM#readme
   
   :license: GPL3
   :recipe: /`appspam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/appspam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/appspam/meta.yaml>`_

   


.. conda:package:: appspam

   |downloads_appspam| |docker_appspam|

   :versions:
      
      

      ``1.03-4``,  ``1.03-3``,  ``1.03-2``,  ``1.03-1``,  ``1.03-0``,  ``1.02-0``,  ``1.01-0``

      

   
   :depends on libcxx: ``>=15.0.7``
   :depends on llvm-openmp: ``>=15.0.7``

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

    pixi global install appspam

to add into an existing workspace instead, run::

    pixi add appspam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install appspam

Alternatively, to install into a new environment, run::

    conda create -n envname appspam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/appspam:<tag>

(see `appspam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_appspam| image:: https://img.shields.io/conda/dn/bioconda/appspam.svg?style=flat
   :target: https://anaconda.org/bioconda/appspam
   :alt:   (downloads)
.. |docker_appspam| image:: https://quay.io/repository/biocontainers/appspam/status
   :target: https://quay.io/repository/biocontainers/appspam
.. _`appspam/tags`: https://quay.io/repository/biocontainers/appspam?tab=tags


.. raw:: html

    <script>
        var package = "appspam";
        var versions = ["1.03","1.03","1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/appspam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/appspam/README.html