:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ndex-python'
.. highlight: bash

ndex-python
===========

.. conda:recipe:: ndex-python
   :replaces_section_title:
   :noindex:

   NDEx Python includes a client and a data model.

   :homepage: https://github.com/ndexbio/ndex-python
   :license: BSD / BSD License
   :recipe: /`ndex-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex-python/meta.yaml>`_

   


.. conda:package:: ndex-python

   |downloads_ndex-python| |docker_ndex-python|

   :versions:
      
      

      ``3.0.11.23-2``,  ``3.0.11.23-1``,  ``3.0.11.23-0``

      

   
   :depends on networkx: 
   :depends on python: ``<3``
   :depends on requests: 
   :depends on requests-toolbelt: 
   :depends on urllib3: ``>=1.16``

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

    pixi global install ndex-python

to add into an existing workspace instead, run::

    pixi add ndex-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ndex-python

Alternatively, to install into a new environment, run::

    conda create -n envname ndex-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ndex-python:<tag>

(see `ndex-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ndex-python| image:: https://img.shields.io/conda/dn/bioconda/ndex-python.svg?style=flat
   :target: https://anaconda.org/bioconda/ndex-python
   :alt:   (downloads)
.. |docker_ndex-python| image:: https://quay.io/repository/biocontainers/ndex-python/status
   :target: https://quay.io/repository/biocontainers/ndex-python
.. _`ndex-python/tags`: https://quay.io/repository/biocontainers/ndex-python?tab=tags


.. raw:: html

    <script>
        var package = "ndex-python";
        var versions = ["3.0.11.23","3.0.11.23","3.0.11.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ndex-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ndex-python/README.html