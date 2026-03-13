:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-eel'
.. highlight: bash

python-eel
==========

.. conda:recipe:: python-eel
   :replaces_section_title:
   :noindex:

   Tool for finding evolutionarily conserved mammalian enhancer elements.

   :homepage: https://github.com/kpalin/EEL
   :license: GPL
   :recipe: /`python-eel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-eel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-eel/meta.yaml>`_

   


.. conda:package:: python-eel

   |downloads_python-eel| |docker_python-eel|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install python-eel

to add into an existing workspace instead, run::

    pixi add python-eel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-eel

Alternatively, to install into a new environment, run::

    conda create -n envname python-eel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-eel:<tag>

(see `python-eel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-eel| image:: https://img.shields.io/conda/dn/bioconda/python-eel.svg?style=flat
   :target: https://anaconda.org/bioconda/python-eel
   :alt:   (downloads)
.. |docker_python-eel| image:: https://quay.io/repository/biocontainers/python-eel/status
   :target: https://quay.io/repository/biocontainers/python-eel
.. _`python-eel/tags`: https://quay.io/repository/biocontainers/python-eel?tab=tags


.. raw:: html

    <script>
        var package = "python-eel";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-eel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-eel/README.html