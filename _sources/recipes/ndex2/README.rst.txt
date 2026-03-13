:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ndex2'
.. highlight: bash

ndex2
=====

.. conda:recipe:: ndex2
   :replaces_section_title:
   :noindex:

   Nice CX Python includes a client and a data model.

   :homepage: https://github.com/ndexbio/ndex2-client
   :documentation: https://github.com/ndexbio/ndex2-client/blob/master/README.rst
   
   :license: BSD / BSD-3-Clause
   :recipe: /`ndex2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex2/meta.yaml>`_

   


.. conda:package:: ndex2

   |downloads_ndex2| |docker_ndex2|

   :versions:
      
      

      ``3.11.0-0``,  ``3.10.0-0``,  ``3.9.0-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.1-0``

      

   
   :depends on ijson: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3``
   :depends on requests: 
   :depends on requests-toolbelt: 
   :depends on six: 
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

    pixi global install ndex2

to add into an existing workspace instead, run::

    pixi add ndex2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ndex2

Alternatively, to install into a new environment, run::

    conda create -n envname ndex2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ndex2:<tag>

(see `ndex2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ndex2| image:: https://img.shields.io/conda/dn/bioconda/ndex2.svg?style=flat
   :target: https://anaconda.org/bioconda/ndex2
   :alt:   (downloads)
.. |docker_ndex2| image:: https://quay.io/repository/biocontainers/ndex2/status
   :target: https://quay.io/repository/biocontainers/ndex2
.. _`ndex2/tags`: https://quay.io/repository/biocontainers/ndex2?tab=tags


.. raw:: html

    <script>
        var package = "ndex2";
        var versions = ["3.11.0","3.10.0","3.9.0","3.8.0","3.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ndex2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ndex2/README.html