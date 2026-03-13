:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'a-liner'
.. highlight: bash

a-liner
=======

.. conda:recipe:: a-liner
   :replaces_section_title:
   :noindex:

   Flexible command\-line tool for linear visualization of genome\-scale sequence alignments

   :homepage: https://github.com/mokuno3430/a-liner
   :license: MIT
   :recipe: /`a-liner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a-liner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a-liner/meta.yaml>`_

   


.. conda:package:: a-liner

   |downloads_a-liner| |docker_a-liner|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bcbio-gff: 
   :depends on biopython: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on python: ``>=3.8``

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

    pixi global install a-liner

to add into an existing workspace instead, run::

    pixi add a-liner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install a-liner

Alternatively, to install into a new environment, run::

    conda create -n envname a-liner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/a-liner:<tag>

(see `a-liner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_a-liner| image:: https://img.shields.io/conda/dn/bioconda/a-liner.svg?style=flat
   :target: https://anaconda.org/bioconda/a-liner
   :alt:   (downloads)
.. |docker_a-liner| image:: https://quay.io/repository/biocontainers/a-liner/status
   :target: https://quay.io/repository/biocontainers/a-liner
.. _`a-liner/tags`: https://quay.io/repository/biocontainers/a-liner?tab=tags


.. raw:: html

    <script>
        var package = "a-liner";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/a-liner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/a-liner/README.html