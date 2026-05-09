:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysvmlight'
.. highlight: bash

pysvmlight
==========

.. conda:recipe:: pysvmlight
   :replaces_section_title:
   :noindex:

   Interface to Thorsten Joachims\' SVM\-Light

   :homepage: https://bitbucket.org/wcauchois/pysvmlight
   :license: UNKNOWN
   :recipe: /`pysvmlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvmlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvmlight/meta.yaml>`_

   


.. conda:package:: pysvmlight

   |downloads_pysvmlight| |docker_pysvmlight|

   :versions:
      
      

      ``0.4-5``,  ``0.4-4``,  ``0.4-3``,  ``0.4-2``,  ``0.4-1``

      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``

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

    pixi global install pysvmlight

to add into an existing workspace instead, run::

    pixi add pysvmlight

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pysvmlight

Alternatively, to install into a new environment, run::

    conda create -n envname pysvmlight

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pysvmlight:<tag>

(see `pysvmlight/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pysvmlight| image:: https://img.shields.io/conda/dn/bioconda/pysvmlight.svg?style=flat
   :target: https://anaconda.org/bioconda/pysvmlight
   :alt:   (downloads)
.. |docker_pysvmlight| image:: https://quay.io/repository/biocontainers/pysvmlight/status
   :target: https://quay.io/repository/biocontainers/pysvmlight
.. _`pysvmlight/tags`: https://quay.io/repository/biocontainers/pysvmlight?tab=tags


.. raw:: html

    <script>
        var package = "pysvmlight";
        var versions = ["0.4","0.4","0.4","0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysvmlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysvmlight/README.html