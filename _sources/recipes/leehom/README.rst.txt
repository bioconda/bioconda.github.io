:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leehom'
.. highlight: bash

leehom
======

.. conda:recipe:: leehom
   :replaces_section_title:
   :noindex:

   Maximum\-likelihood adapter trimming and removal

   :homepage: https://grenaud.github.io/leeHom/
   :license: GPLv3
   :recipe: /`leehom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leehom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leehom/meta.yaml>`_

   


.. conda:package:: leehom

   |downloads_leehom| |docker_leehom|

   :versions:
      
      

      ``1.2.15-6``,  ``1.2.15-5``,  ``1.2.15-4``,  ``1.2.15-3``,  ``1.2.15-2``,  ``1.2.15-1``,  ``1.2.15-0``

      

   
   :depends on bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libgab: ``>=1.0.5``
   :depends on libgab: ``>=1.0.5,<1.1.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on zlib: 

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

    pixi global install leehom

to add into an existing workspace instead, run::

    pixi add leehom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install leehom

Alternatively, to install into a new environment, run::

    conda create -n envname leehom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/leehom:<tag>

(see `leehom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_leehom| image:: https://img.shields.io/conda/dn/bioconda/leehom.svg?style=flat
   :target: https://anaconda.org/bioconda/leehom
   :alt:   (downloads)
.. |docker_leehom| image:: https://quay.io/repository/biocontainers/leehom/status
   :target: https://quay.io/repository/biocontainers/leehom
.. _`leehom/tags`: https://quay.io/repository/biocontainers/leehom?tab=tags


.. raw:: html

    <script>
        var package = "leehom";
        var versions = ["1.2.15","1.2.15","1.2.15","1.2.15","1.2.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leehom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leehom/README.html