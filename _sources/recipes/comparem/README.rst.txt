:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comparem'
.. highlight: bash

comparem
========

.. conda:recipe:: comparem
   :replaces_section_title:
   :noindex:

   A toolbox for comparative genomics.

   :homepage: https://github.com/dparks1134/CompareM
   :license: GPL / GPL-3
   :recipe: /`comparem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparem/meta.yaml>`_

   


.. conda:package:: comparem

   |downloads_comparem| |docker_comparem|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on biolib: ``>=0.1.0``
   :depends on diamond: ``>=0.9.0``
   :depends on matplotlib-base: ``>=1.3.1``
   :depends on numpy: ``>=1.8.0``
   :depends on prodigal: ``>=2.6.2``
   :depends on python: ``>=3.6``
   :depends on scipy: ``>=0.9.0``

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

    pixi global install comparem

to add into an existing workspace instead, run::

    pixi add comparem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install comparem

Alternatively, to install into a new environment, run::

    conda create -n envname comparem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/comparem:<tag>

(see `comparem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_comparem| image:: https://img.shields.io/conda/dn/bioconda/comparem.svg?style=flat
   :target: https://anaconda.org/bioconda/comparem
   :alt:   (downloads)
.. |docker_comparem| image:: https://quay.io/repository/biocontainers/comparem/status
   :target: https://quay.io/repository/biocontainers/comparem
.. _`comparem/tags`: https://quay.io/repository/biocontainers/comparem?tab=tags


.. raw:: html

    <script>
        var package = "comparem";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comparem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comparem/README.html