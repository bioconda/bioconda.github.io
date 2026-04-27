:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shortseq'
.. highlight: bash

shortseq
========

.. conda:recipe:: shortseq
   :replaces_section_title:
   :noindex:

   \\ ShortSeqs are compact and efficient Python objects that hold short sequences while using up to 73\% less memory compared to built\-in types. They have a pre\-computed hash value\, can be compared for equality\, and are easily converted back to the original sequence string.

   :homepage: https://github.com/AlexTate/ShortSeq
   :license: MIT
   :recipe: /`shortseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortseq/meta.yaml>`_

   


.. conda:package:: shortseq

   |downloads_shortseq| |docker_shortseq|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on numpy: ``>=1.21.6,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install shortseq

to add into an existing workspace instead, run::

    pixi add shortseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shortseq

Alternatively, to install into a new environment, run::

    conda create -n envname shortseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shortseq:<tag>

(see `shortseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shortseq| image:: https://img.shields.io/conda/dn/bioconda/shortseq.svg?style=flat
   :target: https://anaconda.org/bioconda/shortseq
   :alt:   (downloads)
.. |docker_shortseq| image:: https://quay.io/repository/biocontainers/shortseq/status
   :target: https://quay.io/repository/biocontainers/shortseq
.. _`shortseq/tags`: https://quay.io/repository/biocontainers/shortseq?tab=tags


.. raw:: html

    <script>
        var package = "shortseq";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shortseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shortseq/README.html