:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmtnote'
.. highlight: bash

hmtnote
=======

.. conda:recipe:: hmtnote
   :replaces_section_title:
   :noindex:

   Human mitochondrial variants annotation using HmtVar.

   :homepage: https://github.com/robertopreste/hmtnote
   :license: MIT / MIT
   :recipe: /`hmtnote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmtnote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmtnote/meta.yaml>`_

   


.. conda:package:: hmtnote

   |downloads_hmtnote| |docker_hmtnote|

   :versions:
      
      

      ``0.7.2-1``,  ``0.7.2-0``

      

   
   :depends on aiofiles: ``>=0.4.0``
   :depends on aiohttp: ``>=3.5.4``
   :depends on click: ``>=7.0``
   :depends on numpy: ``>=1.16.4``
   :depends on pandas: ``>=0.24.2``
   :depends on python: ``>=3.6``
   :depends on requests: ``>=2.22.0``
   :depends on scikit-allel: ``>=1.2.1``
   :depends on vcfpy2: ``>=0.1.2``

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

    pixi global install hmtnote

to add into an existing workspace instead, run::

    pixi add hmtnote

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmtnote

Alternatively, to install into a new environment, run::

    conda create -n envname hmtnote

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmtnote:<tag>

(see `hmtnote/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmtnote| image:: https://img.shields.io/conda/dn/bioconda/hmtnote.svg?style=flat
   :target: https://anaconda.org/bioconda/hmtnote
   :alt:   (downloads)
.. |docker_hmtnote| image:: https://quay.io/repository/biocontainers/hmtnote/status
   :target: https://quay.io/repository/biocontainers/hmtnote
.. _`hmtnote/tags`: https://quay.io/repository/biocontainers/hmtnote?tab=tags


.. raw:: html

    <script>
        var package = "hmtnote";
        var versions = ["0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmtnote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmtnote/README.html